import { createClient } from "redis";

const client = createClient(
    //url if any from avien
);



async function working() {
    try {
        await client.connect();
        console.log("client connected");

        while (1) {
            const response = await client.brPop("submission", 0);
            console.log(response);

        }

    } catch (error) {
        console.error(error)

    }
}
working();