import { BaseController } from './base';

const { MOCK_API_BASE_URL } = process.env;
const EXAMPLE_API_PREFIX = MOCK_API_BASE_URL ? `/${MOCK_API_BASE_URL}/auth` : '/api/auth';

export default {
  [`GET ${EXAMPLE_API_PREFIX}/login`]: BaseController((req, res) => {
    setTimeout(() => res.send({
      data: {
        accessToken: "access_token",
        avatar: "https://s25.q4cdn.com/505856937/files/images/leadership/James-D.-Reed.jpg"
      }
    }), 200)
  }, false)
};
