// Utility Types

type Product = {
  id: number;
  name: string;
  color: string;
  stock: number;
  price: string;
};
type ProductSummary = Pick<Product, "id" | "name" | "price">;
type ProductWithoutStock = Omit<Product, "stock" | "color">;
type ProductWithColor = Required<Product>;
const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  color: "black",
  stock: 100,
};

type OptionaProduct = Partial<Product>;
type ProductReadon = Readonly<Product>;
const emptyobj: Record<string, unknown> = {}; // Record use korle left sider ar key string or right unknown
const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
  color: "black",
  stock: 100,
};
