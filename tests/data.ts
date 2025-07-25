export const users = {
	tim: {
		id: 'f4b89dc2-62fb-46bf-9f5f-c34f4eafe93e',
		firstname: 'Tim',
		lastname: 'Cook',
		email: 'tim.cook@test.com',
		username: 'tim'
	},
	craig: {
		id: '1cd19686-f9a6-43f4-a41f-14a0bf5b4036',
		firstname: 'Craig',
		lastname: 'Federighi',
		email: 'craig.federighi@test.com',
		username: 'craig'
	},
	steve: {
		firstname: 'Steve',
		lastname: 'Jobs',
		email: 'steve.jobs@test.com',
		username: 'steve'
	}
};

export const oidcClients = {
	nextcloud: {
		id: '3654a746-35d4-4321-ac61-0bdcff2b4055',
		name: 'Nextcloud',
		callbackUrl: 'http://nextcloud/auth/callback',
		logoutCallbackUrl: 'http://nextcloud/auth/logout/callback',
		secret: 'w2mUeZISmEvIDMEDvpY0PnxQIpj1m3zY'
	},
	immich: {
		id: '606c7782-f2b1-49e5-8ea9-26eb1b06d018',
		name: 'Immich',
		callbackUrl: 'http://immich/auth/callback',
		secret: 'PYjrE9u4v9GVqXKi52eur0eb2Ci4kc0x'
	},
	federated: {
		id: 'c48232ff-ff65-45ed-ae96-7afa8a9b443b',
		name: 'Federated',
		callbackUrl: 'http://federated/auth/callback',
		federatedJWT: {
			issuer: 'https://external-idp.local',
			audience: 'api://PocketID',
			subject: 'c48232ff-ff65-45ed-ae96-7afa8a9b443b'
		},
		accessCodes: ['federated']
	},
	pingvinShare: {
		name: 'Pingvin Share',
		callbackUrl: 'http://pingvin.share/auth/callback',
		secondCallbackUrl: 'http://pingvin.share/auth/callback2'
	}
};

export const userGroups = {
	developers: {
		id: '4110f814-56f1-4b28-8998-752b69bc97c0e',
		friendlyName: 'Developers',
		name: 'developers'
	},
	designers: {
		id: 'adab18bf-f89d-4087-9ee1-70ff15b48211',
		friendlyName: 'Designers',
		name: 'designers'
	},
	humanResources: {
		friendlyName: 'Human Resources',
		name: 'human_resources'
	}
};

export const oneTimeAccessTokens = [
	{ token: 'HPe6k6uiDRRVuAQV', expired: false },
	{ token: 'YCGDtftvsvYWiXd0', expired: true }
];

export const apiKeys = [
	{
		id: '5f1fa856-c164-4295-961e-175a0d22d725',
		key: '6c34966f57ef2bb7857649aff0e7ab3ad67af93c846342ced3f5a07be8706c20',
		name: 'Test API Key'
	}
];

export const refreshTokens = [
	{
		token: 'ou87UDg249r1StBLYkMEqy9TXDbV5HmGuDpMcZDo',
		clientId: oidcClients.nextcloud.id,
		userId: 'f4b89dc2-62fb-46bf-9f5f-c34f4eafe93e',
		expired: false
	},
	{
		token: 'X4vqwtRyCUaq51UafHea4Fsg8Km6CAns6vp3tuX4',
		clientId: oidcClients.nextcloud.id,
		userId: 'f4b89dc2-62fb-46bf-9f5f-c34f4eafe93e',
		expired: true
	}
];

export const signupTokens = {
	valid: {
		id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
		token: 'VALID1234567890A',
		expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
		usageLimit: 1,
		usageCount: 0,
		createdAt: new Date().toISOString()
	},
	partiallyUsed: {
		id: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
		token: 'PARTIAL567890ABC',
		expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
		usageLimit: 5,
		usageCount: 2,
		createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
	},
	expired: {
		id: 'c3d4e5f6-g7h8-9012-cdef-123456789012',
		token: 'EXPIRED34567890B',
		expiresAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
		usageLimit: 3,
		usageCount: 1,
		createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
	},
	fullyUsed: {
		id: 'd4e5f6g7-h8i9-0123-def0-234567890123',
		token: 'FULLYUSED567890C',
		expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
		usageLimit: 1,
		usageCount: 1,
		createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
	}
};
