import { client } from "../client";

export const getStaticData = async <TConfig>(
    docType: string,
    fields: string,
    filters?: Record<string, any>,
): Promise<TConfig> => {
    let filterString = "";
    if (filters) {
        for (const [key, value] of Object.entries(filters)) {
            filterString += ` && ${key} == '${value}'`;
        }
    }

    const query = `*[_type == '${docType}'${filterString}][0] ${fields}`;

    const data = await client.fetch(query);

    return data as TConfig;
};
