import WalletTransactions from "../../../components/agent/WalletTransactions";

export default function WalletPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Wallet Rransactions</h1>
            <div className="mt-6">
                <WalletTransactions />
            </div>
        </div>
    )
}
