import ProductCards from "@/Common/Components/Cards/ProductCards/ProductCards";
import { setProducts } from "@/Libraries/redux/Slices/Products/ProductReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  const [data, setData] = useState();
  const [dataBeforeSearched, setdataBeforeSearched] = useState();
  const [pageSize, setPageSize] = useState(12);
  const [pageNumber, setPageNumber] = useState(1); // page number use for pagination but because of short time it cound not be complete

  //redux
  const storedData = useSelector((state) => state.products.products);
  const searchedItem = useSelector((state) => state.SearchedItem);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${pageNumber}&per_page=${pageSize}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length < 12 + storedData.length) {
          setData([...data.data, ...storedData]);
          setdataBeforeSearched([...data.data, ...storedData]);
        } else {
          setData(data.data);
          setdataBeforeSearched(data.data);
        }
      });
  }, []);
  useEffect(() => {
    if (searchedItem.searchedItems.length >= 1) {
     const finalItems= data?.filter((item) => {
        return (
          item.first_name.toLowerCase().includes(searchedItem.searchedItems.toLowerCase()) ||
          item.last_name.toLowerCase().includes(searchedItem.searchedItems.toLowerCase())
        );
      });
      setData(finalItems);
    } else {
      setData(dataBeforeSearched);
    }
  }, [searchedItem]);
  return (
    <div className="row container-fluid" style={{ gap: "46px" }}>
      {data?.map((item) => (
        <ProductCards key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Products;
