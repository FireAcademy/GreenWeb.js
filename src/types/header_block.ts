// https://github.com/Chia-Network/chia-blockchain/blob/6205d954e8ac2ea40ee7386b1ee3124da21f4c4a/chia/types/header_block.py#L13

import { fields } from "../serializer";
import { bytes, Optional } from "../serializer/basic_types";
import { EndOfSubSlotBundle } from "./end_of_sub_slot_bundle";
import { RewardChainBlock } from "./reward_chain_block";
import { VDFProof } from "./vdf";
import { Foliage, FoliageTransactionBlock, TransactionsInfo } from "./foliage";

export class HeaderBlock {
    @fields.List(EndOfSubSlotBundle) finished_sub_slots: EndOfSubSlotBundle[];
    @fields.Object(RewardChainBlock) reward_chain_block: RewardChainBlock;
    @fields.Optional(fields.Object(VDFProof)) challenge_chain_sp_proof: Optional<VDFProof>;
    @fields.Object(VDFProof) challenge_chain_ip_proof: VDFProof;
    @fields.Optional(fields.Object(VDFProof)) reward_chain_sp_proof: Optional<VDFProof>;
    @fields.Object(VDFProof) reward_chain_ip_proof: VDFProof
    @fields.Optional(fields.Object(VDFProof)) infused_challenge_chain_ip_proof: Optional<VDFProof>;
    @fields.Object(Foliage) foliage: Foliage;
    @fields.Optional(fields.Object(FoliageTransactionBlock)) foliage_transaction_block: Optional<FoliageTransactionBlock>;
    @fields.VariableSizeBytes() transactions_filter: bytes;
    @fields.Optional(fields.Object(TransactionsInfo)) transactions_info: Optional<TransactionsInfo>;
}