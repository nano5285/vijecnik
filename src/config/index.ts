require("dotenv").config();

export = {
    mongoURI: "mongodb://db-voting:gFyRwQNT3ZV2KqtpnOIIRwZ1DTV1LEAHgk6usqtV6zJSpREqCuhoJjWwSWfXR8bX2dfdKtPPKwJrACDbsSS2UA==@db-voting.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@db-voting@",
    secretOrKey: process.env.TOKEN_SECRET,
};
