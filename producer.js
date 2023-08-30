const {Queue} = require('bullmq');

const notificationQueue = new Queue("Email-queue", {
    connection:{
        host: "127.0.0.1",
        port: "6379",
    },
});

async function send(){
    const res = await notificationQueue.add("email to labra", {
        email: "labra@gmail.com",
        subject: "Welcome",
        body: "Hey you"
    });

    console.log('job added to queue', res.id);
}

send();