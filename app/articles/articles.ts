import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ArticleRepository} from "./ArticleRepository";
import {Article} from "./ArticleRepository";

@Component({
    selector: 'articles',
    templateUrl: 'app/articles/articles.html',
    providers: [ArticleRepository],
})
export class ArticleListComponent {
    articles:Article[];
    constructor(private router:Router,private repo: ArticleRepository) {
    }

    ngOnInit() {
        this.repo.articles.subscribe(updatedTodos => this.articles = updatedTodos);
        this.repo.loadArticles();
    }

    onClick(article:Article) {
        this.router.navigate(["/Articles", article.id]);
    }

    anyArticlesAvailable() : boolean {
        return this.articles && this.articles.length > 0;
    }
}
