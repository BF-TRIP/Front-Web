// 📂 mocks/tourData.ts

export const recommendedData = [
    {
      id: 1,
      image: 'https://static.hubzum.zumst.com/hubzum/2022/04/08/16/5c7d3b73fede4b50b79aa0ca4e64aa77.png',
      title: '김포 한강 오토캠핑장 여기서 데이터가 길어지면',
      description: '휠체어 사용자를 위한 캠핑장',
      variant: 'recommended' as const,
    },
    {
      id: 2,
      image: '/images/forest.jpg',
      title: '봉산 편백나무 치유의 숲 얘도 데이터 길어지면',
      description: '휠체어 사용자를 위한 휴양림',
      variant: 'recommended' as const, 
    },
  ];
  
  export const nearbyData = [
    {
      id: 1,
      image: 'https://www.cha.go.kr/unisearch/images/history_site/thumb/2021070908133103.jpg',
      title: '고양 서오릉',
      location: '경기도 고양시 덕양구 서오릉로 334-32',
      variant: 'nearby' as const,
    },
    {
      id: 2,
      image: 'https://i.namu.wiki/i/sEBIXR9h5loqexieQtIbJyasR5JjunPepcgZwCADJnafHarpXWDYwm38WN0Eo4K-cxFcXunfWT2HqH_R9yz8Gg.webp',
      title: '경희궁',
      location: '경기도 고양시 일산서구 중앙로',
      variant: 'nearby' as const,
    },
  ];
  