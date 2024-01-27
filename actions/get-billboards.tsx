import { Billboard } from "@/types"; //interface : Billboard

const URL=`${process.env.NEXT_PUBLIC_API_URL}`;

const getBillboard = async (id: string, storeId: string): Promise<Billboard> => {

  console.log(URL)
  console.log("storeid:", storeId)
  console.log("ID:", id)

  const res = await fetch(`${URL}/${storeId}/billboards/d59529b7-1e56-4302-94e3-1aa7a54ba47c`);

  return res.json();
};

export default getBillboard;