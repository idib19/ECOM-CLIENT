
import { Attributes } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/attributes/get-attributesValues`;

const getAttributes = async (): Promise<Attributes[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getAttributes;