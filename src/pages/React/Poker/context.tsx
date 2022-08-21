import React from "react";


export const defaultCtx: Record<string, number | boolean | Function> = {
    bet: 500,
    modalStatus: false,
    toggleModal: function () {
        this.modalStatus = !this.modalStatus
    }
}
export const Context = React.createContext<any | null>(null);