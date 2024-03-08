import { FUNCIONALITIES } from "./funcionalities.const";

export const ROL_ADMIN = [
    FUNCIONALITIES.createBeneficiary,
    FUNCIONALITIES.readBeneficiaries,
    FUNCIONALITIES.updateBeneficiary,
    FUNCIONALITIES.deleteBeneficiary,
    FUNCIONALITIES.createDelivery,
    FUNCIONALITIES.readDelivery,
    FUNCIONALITIES.deleteDelivery,
]
export const ROL_DELIVER = [
    FUNCIONALITIES.createBeneficiary,
    FUNCIONALITIES.readBeneficiaries,
    FUNCIONALITIES.updateBeneficiary,
    FUNCIONALITIES.createDelivery,
    FUNCIONALITIES.readDelivery,
]