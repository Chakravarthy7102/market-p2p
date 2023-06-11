const _assets = [
  {
    title: "Ethereum",
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  },
  {
    title: "Avalanche",
    imageUrl:
      "https://s3.coinmarketcap.com/static-gravity/image/dcbda7884cf04dbeb498ba96cd7180a2.jpeg",
  },
  {
    title: "Cardano",
    imageUrl:
      "https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png",
  },
  {
    title: "Chainlink",
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
  },
  {
    title: "Algorand",
    imageUrl:
      "https://s3.coinmarketcap.com/static/img/portraits/62e27661ae5a2d740c063fd2.png",
  },
];

type MiddleAsset = (typeof _assets)[0];
type _Asset = MiddleAsset & { uuid: string };

const mockData = _assets
  .map((asset): Array<MiddleAsset> => new Array(10).fill({ ...asset }, 0, 10))
  .map(
    (assets): Array<_Asset> =>
      assets.map((asset) => {
        return { ...asset, uuid: crypto.randomUUID() };
      })
  );

export type Asset = (typeof mockData)[0][0];
export default mockData;
