{% raw %}
export function render(data) {
  return `<nav aria-labelledby="my-pagination">
    <h2 id="my-pagination">This is my Pagination</h2>
    <ol>
      <li>${data.pagination.href.previous ? `<a href="${data.pagination.href.previous}">Previous</a>` : `Previous`}</li>
      ${data.pagination.pages.map(function (item, index) {
        return `<li><a href="${data.pagination.hrefs[index]}" ${data.pagination.hrefs[index] ? 'aria-current="page"' : "" }>Page ${index + 1}</a></li>`;
      }).join("");}
      <li>${data.pagination.href.next ? `<a href="${data.pagination.href.next}">Next</a>` : `Next`}</li>
    </ol>
  </nav>`;
};
{% endraw %}