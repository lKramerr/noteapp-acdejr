import { onChangeAuthView } from "./authSlice";

export const startChangingAuthView = () => {

    return async( dispatch ) => {

        dispatch( onChangeAuthView() );

    };

};