import SwiftUI

struct ArticleView: View {
    let article: Article

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text(article.category).font(.caption).foregroundStyle(.secondary)
                Text(article.title).font(.largeTitle.bold())
                Text("\(article.minutes) минут чтения").font(.subheadline).foregroundStyle(.secondary)
                Text(article.summary).font(.headline)
                ForEach(Array(article.body.enumerated()), id: \.offset) { _, paragraph in
                    Text(paragraph).font(.body)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding()
        }
        .navigationTitle("Материал")
        .navigationBarTitleDisplayMode(.inline)
    }
}
