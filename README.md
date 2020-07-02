# Movie-TvShow Finder

## Must have features

- [x] Default UI - When the user lands on the page, he/she should be shown a list of popular movies sorted in descending order. Show at least 30 movies when the user lands on the page. Only show top 30 movies according to matching search, filters and sort criteria.
- [ ] Tab layout - There are two tabs, movies and tv series. UI for both of them is exactly the same as you can see in the image. When I change tabs, search box, filters should reset to default.
- [x] Search - A user should be able to search for any term and that movie should be listed in the box below. The search results have to be fetches as and when user types (read debouncing).
- [x] Filters - User should be able to filter the listed movies by genres, languages etc (Add any filter which u think is suitable here)
- [x] Sort - User should be able to sort the list by popularity, ratings etc. (Add any sorting criteria if you have time)
- [x] Pagination - When the user scrolls near the end of the list, we should fetch the next batch of 30 movies. Like how facebook News Feed works.

## Bonus Points

- [ ] Unit tests for Search or Filter feature.
- [ ] Awesome and performant UI.
- [ ] Dark mode toggle.

## Points to remember

  * Add your code to GitHub and add a proper readme to bootstrap and run your project.
  * Try to cover all the use cases to provide good UX.
  * DO NOT USE 3rd party libraries for building components. You can use bootstrap for CSS (but not the bootstrap components).
  * Since this is a time sensitive assignment, we will have a hard stop after 3 days. So prioritise accordingly.

## Remarks

  * The API us only giving 20 results per page.
  * I couldn't find a API call that can filter/sort and search at the same time. so I am not yet able to fetch results as per to matching search, filters and sort criteria at the same time. will try to modify the code in do the serch locally.
  * When tabs are interchanged the search and filter boxes are are not resetting. will work on that.
  