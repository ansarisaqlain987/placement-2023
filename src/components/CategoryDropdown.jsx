export const CategoryList = [
    {
        key: 1,
        name: "Slot 1",
        value: "Slot 1"
    },
    {
        key: 2,
        name: "Super Dream",
        value: "Super Dream"
    },
    {
        key: 3,
        name: "Regular",
        value: "Regular"
    },
    {
        key: 4,
        name: "Dream",
        value: "Dream"
    }
]

const CategoryDropdown = ({ setFilters, category, ...props }) => {
    return (
        <select
            name="category"
            className="form-select"
            defaultValue={""}
            value={!category ? "" : category}
            onChange={(e) => {
                setFilters((oldValue) => ({ ...oldValue, searchCategory: e.target.value }))
            }}
        >
            <option value={""}>Filter by Category</option>
            {
                CategoryList.map(ctc => {
                    return (<option value={ctc.value} key={ctc.key}>
                        {ctc.name}
                    </option>)
                })
            }
        </select>

    )
}

export default CategoryDropdown