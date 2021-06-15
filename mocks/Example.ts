import Mock from 'mockjs';
import { randomDate } from './utils';
import { BaseController } from './base';

const { MOCK_API_BASE_URL } = process.env;
const EXAMPLE_API_PREFIX = MOCK_API_BASE_URL ? `/${MOCK_API_BASE_URL}/example` : '/api/example';

const createMockExample = () => {
  // const max = Mock.mock('@natural(20, 30)');
  // const data: any[] = [];
  // while (data.length < max) {
  //   data.push(
  //     Mock.mock({
  //       id: 1234321236789,
  //       amount: '@natural(10000, 10000000)',
  //       validateTime: randomDate()
  //     })
  //   );
  // }

  const data = [
    {
      id: "00001",
      name: "Phalaenopsis hieroglyphica",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      progress: 20,
      requestCount: 157,
      contributeCount: 1,
      updatedAt: new Date(Date.now() - 5000)
    },

    {
      id: "00002",
      name: "Royal Botanic Gardens",
      description: "Plants and fungi hold promise as future medicines, fuels and foods, according to the Royal Botanic Gardens, Kew.",
      thumnail: "https://c.files.bbci.co.uk/126B8/production/_114684457_gladiolusmariaeinfloweronbangaguemeytablemountaininthekounounkanmassifinguinea.creditrbgkew.-3.jpg",
      progress: 100,
      requestCount: 290,
      contributeCount: 5,
      updatedAt: new Date(Date.now() - 10000)
    },
  ]

  return data;
};

export const mockExample = createMockExample();

export default {
  [`GET ${EXAMPLE_API_PREFIX}`]: BaseController((req, res) => {
    setTimeout(() => res.send({
      data: mockExample
    }), 500)
  }, false)
};
