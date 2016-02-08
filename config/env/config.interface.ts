export interface ConfigEnv {
    environment: string,
	db: {
        name: string,
	    sessionSecret: string,
        options: {
        db: { native_parser: boolean },
        server: { poolSize: number },
        replset: { rs_name: string },
        user: string,
        pass: string
        },
    }
	google: {
		clientID: string,
		clientSecret: string,
		callbackURL: string;
	},
    express: {
        port: number;
    }
};



