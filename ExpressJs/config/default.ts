export default {
    port: 1337,
    //dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    //dbUri: "mongodb+srv://gisas61987:my1stpassword@cluster0.mykbi.mongodb.net/CompanyDB?retryWrites=true&w=majority",
    dbUri: "mongodb+srv://gisas61987:my1stpassword@cluster0.mykbi.mongodb.net/ExpressTutDB?retryWrites=true&w=majority",
    saltWorkFactor: 10,
    accessTokenTTL: "15m",
    refreshTokenTTL: "1y",
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCcBeMTwia8fJH4bjE5SzpQDPwz
52hJeGyq/4VJjREyDi/NIMl9/bRHxtpab1yRxQpx1KS5kMEpUjfp3ejIecCjeWkY
2jBKiQyQBJXfSxXAgahe/Hm9gP18PxaBttNZSnubcrBKqf1gX/JrGlSGmcy0qgAj
7Kr0Um7eSn4bkxhHNwIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCcBeMTwia8fJH4bjE5SzpQDPwz52hJeGyq/4VJjREyDi/NIMl9
/bRHxtpab1yRxQpx1KS5kMEpUjfp3ejIecCjeWkY2jBKiQyQBJXfSxXAgahe/Hm9
gP18PxaBttNZSnubcrBKqf1gX/JrGlSGmcy0qgAj7Kr0Um7eSn4bkxhHNwIDAQAB
AoGAHTVo7nEBaXX0qcqPQoeX0hasPFdNCbwWs+iEHmHfXzySrFdAAWs2jd1nUVjZ
vpxhuS+y6t5zmvW+a/TUOHu6mVP5o+naOaea/1GSRCi2nCW6SDoL6IZJAQHKKUko
OWM7VsBPCvs+C+Bs5360Q+L1ASi8vtje2DqwkBOTR00Un7kCQQDvfOsq211Rkjxl
NNpOtmvxuL0uFNkgwbeajDc3q5zRgVsRbp//FT+Sk/qN+EwcpIgECBOjTdjIl1MT
k/MGh3gtAkEApsfFM1hxPKOPA9sBYGLRWjK8nJXKBMS+o0OOGDbvlXGlEFK6ilXA
5OOVrSUm3t9vPF7F00VW7oB/Vs+Orb5XcwJBAOjBwRHrF9xiw14dqxsbQvgwc3Up
AApNHDQRmMz7drNMBIWBvfC95wZ/2eFHdDnWUveQHf32d/4kzLJXdbhfy5UCQHDs
lnNbkOB0BiOgJ+BxSDsAW4DSUwTDiijVVuLCX5oaZp8UxMVhpsfT6MZhf14sfw6r
RNr1+hRm4NGQm5S8ak0CQDx6iV/u6z/Alqf8PZI1pKxrzrX86uhujdhr/R9T7P2J
wm0AjpmK1gNLpKJinOAYHeD5Qr5pRIsGfdtWI5d3SyA=
-----END RSA PRIVATE KEY-----`
};