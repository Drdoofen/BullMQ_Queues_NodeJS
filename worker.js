const {Worker} = require("bullmq");

const sendEmail = () => new Promise((resolve, reject) => setTimeout(() => resolve(), 5000));

const worker = new Worker("Email-queue", async (job) => {

    console.log(`Message recieved ${job.id}`);
    console.log('Processing message...');
    console.log('sending message to ${job.data.email}');

    await sendEmail();
    
    console.log('The Email is sent');

});

