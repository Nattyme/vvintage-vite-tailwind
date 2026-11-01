export function Badge (text, color = 'gray', url = null) {

    const colors = {
        gray: 'bg-mist-200',
        red: 'bg-red-600',
        green: 'bg-green-700',
        orange: 'bg-orange-400'
    }

    const colorClasses = colors[color] || colors.gray // если цвета нет в массиве
    

    if (url) {
      return `<a href="${url}" class="${colorClasses}">${text}</a>`
    }

    return `<span class="${colorClasses}">${text}</span>`
}