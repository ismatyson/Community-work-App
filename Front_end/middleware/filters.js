export function filterLeads (filter, leads) {
    let filteredList = [...leads]
  
    // Filter status
    if (filter.status !== 'all') {
      const filtered = filteredList.filter(lead => lead.status === filter.status)
      filteredList = filtered
    }
  
    // Search
    if (filter.search !== '') {
      const searchList = []
      const searchTerm = filter.search.toLowerCase()
      for (let i = 0; i < filteredList.length; i++) {
        if (
          (filteredList[i].companyName !== null && filteredList[i].companyName.toLowerCase().includes(searchTerm)) ||
          (filteredList[i].jobTitle !== null && filteredList[i].jobTitle.toLowerCase().includes(searchTerm))
        ) {
          searchList.push(filteredList[i])
        }
      }
      filteredList = searchList
    }
  
    return filteredList
  }