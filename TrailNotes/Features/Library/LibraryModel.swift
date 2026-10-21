import Foundation
import Combine

@MainActor
final class LibraryModel: ObservableObject {
    @Published private(set) var articles: [Article] = []
    @Published private(set) var isLoading = false
    @Published private(set) var errorMessage: String?
    private let service: any ArticleServing

    init(service: any ArticleServing = ArticleService()) {
        self.service = service
    }

    func load() async {
        guard !isLoading else { return }
        isLoading = true
        errorMessage = nil
        defer { isLoading = false }
        do {
            articles = try await service.fetchArticles()
        } catch {
            if error is CancellationError || (error as? URLError)?.code == .cancelled { return }
            articles = []
            errorMessage = "Не удалось загрузить материалы. Проверьте соединение."
        }
    }
}
