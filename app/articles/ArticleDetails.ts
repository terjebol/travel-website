import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ArticleRepository} from "./ArticleRepository";
import {Article} from "./ArticleRepository";

@Component({
    selector: 'article-details',
    templateUrl: 'app/articles/article.html',
    providers: [ArticleRepository],
})

export class ArticleDetails implements OnInit
{
    article:Article;
    constructor(private route:ActivatedRoute,
                private repo:ArticleRepository) {
    }

    ngOnInit() {
        this.route.params.filter(params => !!params['id'])
            .forEach(params => {
                const id = params['id'];
                this.repo.articles.subscribe(updatedTodos => this.article = updatedTodos.filter(x => x.id == id)[0]);
                this.repo.loadArticles();
            });
    }

}