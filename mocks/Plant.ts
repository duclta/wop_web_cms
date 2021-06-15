import { BaseController } from './base';

const { MOCK_API_BASE_URL } = process.env;
const EXAMPLE_API_PREFIX = MOCK_API_BASE_URL ? `/${MOCK_API_BASE_URL}/plants` : '/api/plants';

const createMockExample = () => {
  const data = [
    {
      id: "00001",
      name: "Phalaenopsis hieroglyphica",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      progress: 20,
      requestCount: 157,
      contributeCount: 1,
      updatedAt: new Date(Date.now() - 5000),
      tabs: [
        {
          id: 1,
          name: "Habitat",
          description: "Habitat",
          attributes: [
            {
              id: 1,
              name: "Climate",
              value: "Tropic",
              // contributes: []
            },
            {
              id: 2,
              name: "Humidity",
              value: "50% - 60%",
              // contributes: []
            },
            {
              id: 3,
              name: "Soil type",
              value: "Dry soil",
              // contributes: []
            }
          ]
        },
        {
          id: 2,
          name: "Common names",
          description: "Common names",
          attributes: [
            {
              id: 1,
              name: "Vietnam",
              value: "Hồ Diệp Ấn",
              // contributes: []
            },
          ]
        },
        {
          id: 3,
          name: "Flower",
          description: "Flower",
          attributes: [
            {
              id: 1,
              name: "Petals",
              value: "5",
              // contributes: []
            },
            {
              id: 2,
              name: "Size",
              value: "Medium",
              // contributes: []
            },
            {
              id: 3,
              name: "Color",
              value: "Bright green",
              // contributes: []
            },
            {
              id: 4,
              name: "Image",
              value: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Phalaenopsis_hieroglyphica_toapel.jpg",
              // contributes: []
            },
            {
              id: 3,
              name: "Color",
              value: "Bright green",
              // contributes: []
            },
            {
              id: 3,
              name: "Color",
              value: "Bright green",
              // contributes: []
            },
            {
              id: 2,
              name: "Size",
              value: "Medium",
              // contributes: []
            },
          ]
        }
      ]
    },
    {
      id: "00002",
      name: "Phalaenopsis hieroglyphica",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      progress: 90,
      requestCount: 90,
      contributeCount: 3,
      updatedAt: new Date(Date.now() - 20000)
    },
    {
      id: "00003",
      name: "Royal Botanic Gardens",
      description: "Plants and fungi hold promise as future medicines, fuels and foods, according to the Royal Botanic Gardens, Kew.",
      thumbnail: "https://c.files.bbci.co.uk/126B8/production/_114684457_gladiolusmariaeinfloweronbangaguemeytablemountaininthekounounkanmassifinguinea.creditrbgkew.-3.jpg",
      progress: 100,
      requestCount: 290,
      contributeCount: 5,
      updatedAt: new Date(Date.now() - 10000)
    },
    {
      id: "00001",
      name: "Phalaenopsis hieroglyphica",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      progress: 20,
      requestCount: 157,
      contributeCount: 1,
      updatedAt: new Date(Date.now() - 5000)
    },
    {
      id: "00002",
      name: "Phalaenopsis hieroglyphica",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      progress: 90,
      requestCount: 90,
      contributeCount: 3,
      updatedAt: new Date(Date.now() - 20000)
    },
    {
      id: "00003",
      name: "Royal Botanic Gardens",
      description: "Plants and fungi hold promise as future medicines, fuels and foods, according to the Royal Botanic Gardens, Kew.",
      thumbnail: "https://c.files.bbci.co.uk/126B8/production/_114684457_gladiolusmariaeinfloweronbangaguemeytablemountaininthekounounkanmassifinguinea.creditrbgkew.-3.jpg",
      progress: 100,
      requestCount: 290,
      contributeCount: 5,
      updatedAt: new Date(Date.now() - 10000)
    },
    {
      id: "00001",
      name: "Phalaenopsis hieroglyphica",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      progress: 20,
      requestCount: 157,
      contributeCount: 1,
      updatedAt: new Date(Date.now() - 5000),
      tabs: [
        {
          id: 1,
          name: "Habitat",
          description: "Habitat",
          attributes: [
            {
              id: 1,
              name: "Climate",
              value: "Tropic",
              // contributes: []
            },
            {
              id: 2,
              name: "Humidity",
              value: "50% - 60%",
              // contributes: []
            },
            {
              id: 3,
              name: "Soil type",
              value: "Dry soil",
              // contributes: []
            }
          ]
        },
        {
          id: 2,
          name: "Common names",
          description: "Common names",
          attributes: [
            {
              id: 1,
              name: "Vietnam",
              value: "Hồ Diệp Ấn",
              // contributes: []
            },
          ]
        }
      ]
    },
    {
      id: "00002",
      name: "Phalaenopsis hieroglyphica",
      description: "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail: "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      progress: 90,
      requestCount: 90,
      contributeCount: 3,
      updatedAt: new Date(Date.now() - 20000)
    },
    {
      id: "00003",
      name: "Royal Botanic Gardens",
      description: "Plants and fungi hold promise as future medicines, fuels and foods, according to the Royal Botanic Gardens, Kew.",
      thumbnail: "https://c.files.bbci.co.uk/126B8/production/_114684457_gladiolusmariaeinfloweronbangaguemeytablemountaininthekounounkanmassifinguinea.creditrbgkew.-3.jpg",
      progress: 100,
      requestCount: 290,
      contributeCount: 5,
      updatedAt: new Date(Date.now() - 10000)
    },
  ]

  return data;
};

export const mockExample = createMockExample();
export const attributes: any[] = [
  {
    id: "1",
    name: "Petals",
    value: "5",
    contributes: [
      {
        id: "1",
        user: {
          id: "1",
          name: "Simon",
          avatar: "https://s25.q4cdn.com/505856937/files/images/leadership/James-D.-Reed.jpg"
        },
        value: 5,
        verified: true,
        downVote: 6,
        upVote: 129,
      },
      {
        id: "1",
        user: {
          id: "1",
          name: "Simon",
          avatar: "https://s25.q4cdn.com/505856937/files/images/leadership/James-D.-Reed.jpg"
        },
        value: 5,
        verified: false,
        downVote: 6,
        upVote: 129,
      },
      {
        id: "1",
        user: {
          id: "1",
          name: "Simon",
          avatar: "https://s25.q4cdn.com/505856937/files/images/leadership/James-D.-Reed.jpg"
        },
        value: 5,
        verified: false,
        downVote: 6,
        upVote: 129,
      },
    ]
  },
  {
    id: "2",
    name: "Humidity",
    value: "50% - 60%",
    contributes: []
  },
  {
    id: "3",
    name: "Soil type",
    value: "Dry soil",
    contributes: []
  }
]

export default {
  [`GET ${EXAMPLE_API_PREFIX}/attributes/:id`]: BaseController((req, res) => {
    setTimeout(() => res.send({
      data: attributes.find(item => item.id === req.params.id)
    }), 500)
  }, false),
  [`GET ${EXAMPLE_API_PREFIX}`]: BaseController((req, res) => {
    setTimeout(() => res.send({
      data: mockExample
    }), 500)
  }, false),
  [`GET ${EXAMPLE_API_PREFIX}/:id`]: BaseController((req, res) => {
    setTimeout(() => res.send({
      data: mockExample.find(item => item.id === req.params.id)
    }), 500)
  }, false),
};
