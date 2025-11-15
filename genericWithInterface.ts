interface Developer<T, x = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: x;
}

interface BrandCharaWatch {
  heartRate: string;
  stopWatch: boolean;
}
const poordeveloper: Developer<
  BrandCharaWatch,
  {
    brand: "Yamaha";
    enginCapacity: "200cc";
  }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenivo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};
interface AppleWatch {
  heartRate: string;
  stopWatch: boolean;
  callSuport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const richdeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "hp",
    model: "X34",
    releasedYear: "2050",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
    callSuport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: null,
};
