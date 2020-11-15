import { useState, useEffect } from "react";
import { Hadal } from "hadal";

const kretsloopCrates = {};

export function useKretsloop(crate) {
    if (kretsloopCrates[crate.route] == null) {
        kretsloopCrates[crate.route] = Hadal.Crate({
            route: crate.route,
            ...crate.config,
            data: {
                state: crate.state
            },
        });
    }
    const [kretsloopCrate, setKretsloopCrate] = useState(kretsloopCrates[crate.route]);

    kretsloopCrate.onRemoteChange = function (oldData, newData) {
        console.log(newData);
        setKretsloopCrate({...kretsloopCrate});
    };

    const setStateProxy = function(state) {
        kretsloopCrate.data.state = state;
        setKretsloopCrate({...kretsloopCrate});
    }

    return [kretsloopCrate.data.state, setStateProxy];
}
