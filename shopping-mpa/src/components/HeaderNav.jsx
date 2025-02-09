export default function HeaderNav({children}) {
    return (
        <div className="flex gap-8 justify-center items-center p-1 border border-gray-200 rounded-xl">
            {children}
        </div>
    )
}