import Foundation

protocol ArticleServing: Sendable {
    func fetchArticles() async throws -> [Article]
}

/// Only a remote source in the starter. Persistent offline support is the exercise.
struct ArticleService: ArticleServing {
    // Local companion server; localhost works in the iOS Simulator.
    let endpoint = URL(string: "http://127.0.0.1:8765/articles.json")!

    func fetchArticles() async throws -> [Article] {
        var request = URLRequest(url: endpoint)
        request.cachePolicy = .reloadIgnoringLocalCacheData
        request.timeoutInterval = 8
        let (data, response) = try await URLSession.shared.data(for: request)
        guard let response = response as? HTTPURLResponse,
              (200..<300).contains(response.statusCode) else {
            throw URLError(.badServerResponse)
        }
        return try JSONDecoder().decode([Article].self, from: data)
    }
}
