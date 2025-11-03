// server.js

// 1. Express লাইব্রেরি ইম্পোর্ট করা
const express = require('express');
const app = express();
const port = 3000; // আমরা 3000 পোর্টে সার্ভারটি চালাবো

// 2. আপনার রেসপন্স কনট্রাক্ট (Response Contract)
// আপনি যে ফরমেটে রেসপন্স পাঠাতে চান, তা এখানে ঠিক করুন
const myContractResponse = {
    success: true,
    message: "Data fetched successfully!",
    data: {
        id: 12345,
        name: "Mr. Node User",
        email: "user@example.com"
    }
};

// 3. একটি API রুট (Route) তৈরি করা
// যখন কেউ '/api/data' URL-এ আসবে, তখন এই কোড কাজ করবে
app.get('/api/data', (req, res) => {
    
    // 4. কনট্রাক্ট অনুযায়ী JSON রেসপন্স পাঠানো
    res.status(200).json(myContractResponse);
});

// 5. সার্ভার চালু করা
app.listen(port, () => {
    console.log(`✅ Start The Server http://localhost:${port} -এ`);
    console.log(`🌐 Test Your API: http://localhost:${port}/api/data`);
});