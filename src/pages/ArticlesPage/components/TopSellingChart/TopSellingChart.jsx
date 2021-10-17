import ProductImg from "assets/images/ProductImg.jpeg";
import Item from "./Item/Item";

const TopSellingChart = () => {
  // TODO: Replace dummy data when API is done
  const data = [
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "1083484",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "982371",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "344831",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "45383",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "5694",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "4094",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "2887",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "2143",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "1995",
    },
    {
      imgURL: { ProductImg },
      productName: "itemKenneth Pencil Party Pack By Creator Pain...1",
      category: "Art Supplies",
      sales: "432",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <Item key={item.productName} item={item} index={index} />
      ))}
    </>
  );
};
TopSellingChart.propTypes = {};
export default TopSellingChart;
