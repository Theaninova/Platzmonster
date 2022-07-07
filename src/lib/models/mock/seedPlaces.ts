import {Place, PlaceType} from "../place"
import {convertTuData} from "./tu-data"

export function generateRoomNames(name: string, roomCounts: number[]): string[] {
  const roomPadding = roomCounts.reduce((a, b) => Math.max(a, b.toString().length), 0)

  return roomCounts.flatMap((length, floor) =>
    Array.from({length}, (_, room) => `${name} ${floor}${room.toString().padStart(roomPadding, "0")}`),
  )
}

export function generateWorkPlaceNames(name: string, count: number) {
  const padding = count.toString().length

  return Array.from({length: count}, (_, i) => `${name} ${i.toString().padStart(padding, "0")}`)
}

export interface PlaceSeedConfig {
  floors: number
  roomsPerFloor: number
  workplacesPerRoom: number
}

export function chunk<T>(arr: T[], chunkSize = 1, cache: T[][] = []): T[][] {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

export async function insertPlaces({roomsPerFloor, workplacesPerRoom, floors}: PlaceSeedConfig) {
  const buildings = convertTuData().map(it => new Place(it))

  const totalCount = buildings.length * floors * roomsPerFloor * workplacesPerRoom
  if (buildings.length * floors * roomsPerFloor * workplacesPerRoom > 1_000_000) {
    throw new Error(`Refusing to insert more than ${totalCount} places`)
  }

  const rooms = buildings.flatMap(building =>
    generateRoomNames(
      building.shortName!,
      Array.from({length: Math.floor(Math.random() * floors)}, () =>
        Math.floor(Math.random() * roomsPerFloor),
      ),
    ).map(name => new Place({name, type: PlaceType.ROOM, parentId: building._id})),
  )
  const workplaces = rooms.flatMap(room =>
    generateWorkPlaceNames("Platz", workplacesPerRoom).map(
      name => new Place({name, type: PlaceType.WORK_PLACE, parentId: room._id}),
    ),
  )

  for (const insertChunk of chunk([...buildings, ...rooms, ...workplaces], 500)) {
    await Place.insertMany(insertChunk)
  }
}
