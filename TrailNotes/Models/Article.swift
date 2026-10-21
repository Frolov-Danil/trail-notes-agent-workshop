import Foundation

struct Article: Codable, Identifiable, Hashable, Sendable {
    let id: String
    let title: String
    let category: String
    let minutes: Int
    let summary: String
    let body: [String]
}
