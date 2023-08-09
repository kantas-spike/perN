import RadioButton from "./radio_button"

export default function RadioButtonGroup({
    label,
    isRequired,
    description,
    errorMessage,
    disabled,
    groupName,
    checkedValue,
    onChanged,
    type = "normal",
    items = [],
}){
    const radioName = groupName ? groupName : label

    const itemToRadioInfo = (item, idx, radioName) => {
        const itemType = typeof item
        if (itemType === 'object') {
            return {
                label: item['label'],
                value: item['value'] || item['label'],
                id: item['id'] || `${radioName}_${idx}`,
                description: item['description']
            }
        } else {
            return {
                label: String(item),
                value: String(item),
                id: `${radioName}_${idx}`,
            }
        }
    }

    return (
    <div className="flex flex-col text-on-surface">
        <div className="mb-xs flex items-center">
            <label className={`txt-label-l mr-xs ${disabled? 'text-disabled/60' : ''}`}>{label}</label>
            { !disabled ? (isRequired ? <div className="txt-label-l text-error">必須</div> : <div className="txt-label-l text-on-surface-variant">任意</div>) : null }
        </div>
        { description && !disabled ? (
            <div className="txt-body-m mb-xs text-on-surface-variant">
                {description}
            </div>
            ) : null }
        <div className={`flex flex-col gap-xs ${errorMessage && !disabled ? 'text-error' : ''}`}>
        {
            items.map((item, idx) => {
                const info = itemToRadioInfo(item, idx, radioName)
                return <RadioButton {...info} key={idx} name={radioName} type={type} checkedValue={checkedValue} onChanged={onChanged} hasError={!!errorMessage} disabled={disabled} />
            })
        }
        </div>
        { errorMessage && !disabled ? <div className="text-error mt-xs">{errorMessage}</div> : null }
    </div>)
}
