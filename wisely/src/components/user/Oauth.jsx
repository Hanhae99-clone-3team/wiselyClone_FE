const REST_API_KEY = "c4f6e24dec4e7fd8840058222b589a57";
const REDIRECT_URI =  "http://localhost:3000/kakaoLogin";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
