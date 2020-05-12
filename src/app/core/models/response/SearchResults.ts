import { PageLink } from './PageLink';
import { Pagination } from './Pagination';

export class SearchResults<T> {
    searchResultList: T[];
    pagination: Pagination;
    pageLink: PageLink;
}