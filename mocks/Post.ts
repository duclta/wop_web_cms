import { BaseController } from './base';

const { MOCK_API_BASE_URL } = process.env;
const EXAMPLE_API_PREFIX = MOCK_API_BASE_URL ? `/${MOCK_API_BASE_URL}/posts` : '/api/posts';

const createMockExample = () => {
  const data = [
    {
      id: "00001",
      title: "Phalaenopsis hieroglyphica",
      user: {
        name: "Simon",
        avatar: "https://s25.q4cdn.com/505856937/files/images/leadership/James-D.-Reed.jpg",
      },
      content: "<div>Post content<div>",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      createdAt: new Date(Date.now() - 5000)
    },
    {
      id: "00003",
      title: "Royal Botanic Gardens",
      user: {
        name: "Simon",
        avatar: "https://s25.q4cdn.com/505856937/files/images/leadership/James-D.-Reed.jpg",
      },
      content: "<div>Post content<div>",
      description: "Plants and fungi hold promise as future medicines, fuels and foods, according to the Royal Botanic Gardens, Kew.",
      thumbnail: "https://c.files.bbci.co.uk/126B8/production/_114684457_gladiolusmariaeinfloweronbangaguemeytablemountaininthekounounkanmassifinguinea.creditrbgkew.-3.jpg",
      createdAt: new Date(Date.now() - 10000)
    },
  ]

  return data;
};

export const mockExample = createMockExample();

export default {
  [`GET ${EXAMPLE_API_PREFIX}`]: BaseController((req, res) => {
    setTimeout(() => res.send({
      data: mockExample
    }), 1000)
  }, false),
  [`GET ${EXAMPLE_API_PREFIX}/:id`]: BaseController((req, res) => {
    setTimeout(() => res.send({
      data: mockExample.find(item => item.id === req.params.id)
    }), 500)
  }, false),
};
