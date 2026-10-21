import SwiftUI

struct LibraryView: View {
    @StateObject private var model = LibraryModel()

    var body: some View {
        NavigationStack {
            Group {
                if model.isLoading && model.articles.isEmpty {
                    ProgressView("Загружаем материалы…")
                } else if let error = model.errorMessage {
                    ContentUnavailableView {
                        Label("Нет соединения", systemImage: "wifi.slash")
                    } description: {
                        Text(error)
                    } actions: {
                        Button("Повторить") { Task { await model.load() } }
                    }
                } else if model.articles.isEmpty {
                    ContentUnavailableView("Пока нет материалов", systemImage: "book.closed")
                } else {
                    List(model.articles) { article in
                        NavigationLink(value: article) {
                            VStack(alignment: .leading, spacing: 6) {
                                Text(article.title).font(.headline)
                                Text(article.summary).font(.subheadline).foregroundStyle(.secondary)
                                Text("\(article.category) · \(article.minutes) мин").font(.caption)
                            }.padding(.vertical, 6)
                        }
                    }
                    .refreshable { await model.load() }
                }
            }
            .navigationTitle("Trail Notes")
            .navigationDestination(for: Article.self) { ArticleView(article: $0) }
            .toolbar {
                Button("Обновить", systemImage: "arrow.clockwise") {
                    Task { await model.load() }
                }.disabled(model.isLoading)
            }
            .task { await model.load() }
        }
    }
}
