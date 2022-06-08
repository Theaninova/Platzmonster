<script>
    // we write export let to say that this is a property
    // that means we can change it later!


    export let users = [
        "user1",
        "user2",
        "user3",
        "user4",
    ]
    class User {
        constructor(name, mtrNr, id, password) {
            this.name = name;
            this.mtrNr = mtrNr;
            this.id = id;
            this.password = password;
        }
    }

    let john = new User("John", 123423, 1, "vogel");
    let simon = new User("Simon", 232433, 2, "abcdef");
    let tom = new User("Tom", 438623, 3, "adslfkjad");
    let harrison = new User("Simon", 232433, 4, "aasdtgerf");
    let userarray = [john, simon, tom, harrison];



</script>
<h2> User List </h2>

<td> <button type="button" class="button" > <a href="/login" > Create New </a>    </button> </td>

<form method="post">
    <button type="submit" aria-hidden="true" style="display: none"></button>
    <table class="table text-white">


        <thead>
        <tr>
            <th scope="col" class="text-break d-none d-sm-table-cell">ID</th>
            <th scope="col" class="text-break d-none d-sm-table-cell" width="100">Username</th>
            <th scope="col" class="text-break d-table-cell d-sm-none" width="100">Mtr-Nr.</th>
            <th scope="col" class="text-break d-table-cell d-sm-none">Password </th>

        </tr>
        </thead>
        {#each userarray as {name, mtrNr, id, password}, index }

            <tr >
                <th scope="row" class="col-auto d-none d-sm-table-cell">{id}</th>
                <td class="text-break">
                    {name}
                </td>

                <td  class="col-auto">
                    {mtrNr}
                </td>

                <td class="col-auto">
                    {password}
                </td>

                <td> <button type="button" class="button"> edit </button> </td>

                <td> <button type="button" class="button" > delete   </button> </td>






            </tr>
        {/each}

    </table>
</form>

<style>
    h2 {
        font-size: xxx-large;
        color: indianred;
    }

    tr {
        color: white;
    }
</style>