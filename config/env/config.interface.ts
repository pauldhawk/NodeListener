export interface ConfigEnv {
    environment: string,
	db: string,
	sessionSecret: string,
	google: {
		clientID: string,
		clientSecret: string,
		callbackURL: string;
	},
    express: {
        port: number;
    }
};