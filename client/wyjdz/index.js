function handleForm() {
        const gdzieWychodzi = document.getElementById("gdzieWychodzi").value;
        console.log(gdzieWychodzi);

        fetch("/wyjdz", {
            "headers": {
                "Content-Type": "application/json",
            },
            "method": "POST",
            "body": JSON.stringify({
                "gdzieWychodzi": gdzieWychodzi
            })
        });
}