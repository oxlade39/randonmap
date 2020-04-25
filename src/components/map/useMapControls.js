import { NumberParam, StringParam, useQueryParams, withDefault } from "use-query-params";
import { v4 as uuidv4 } from "uuid";
import { defaultContries, defaultUUID } from "../../constants";

export default function useMapControls() {
    const [query, setQuery] = useQueryParams({
        countryCount: withDefault(NumberParam, defaultContries),
        mapId: withDefault(StringParam, defaultUUID),
    });

    const update = ({countryCount}) => {
        setQuery(
            {
              mapId: uuidv4(),
              countryCount: countryCount,
            },
            "push"
          );
    }

    const random = () => {
        setQuery(
            {
                ...query,
                mapId: uuidv4(),                
            }
        )
    }

    return {query, update, random};
}