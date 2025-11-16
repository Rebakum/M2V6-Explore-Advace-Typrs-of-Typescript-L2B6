type A = null;
type B = undefined;
type C = A extends null ? true : B extends undefined ? true : false;

type RichPeoopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};
type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
type HasBike = checkVehicle<"ship">;
