'use client';
export default function Create() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;

                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, body }),
                };

                fetch(`http://localhost:9999/topics`, options)
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);
                        const lastid = result.id;
                    });
            }}
        >
            <p>
                <input type="text" name="title" placeholder="title" />
            </p>
            <p>
                <textarea name="body" placeholder="body" cols="30" rows="10"></textarea>
            </p>
            <input type="submit" value="create" />
        </form>
    );
}
