#!/usr/bin/env python3
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import argparse

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    print(f"Trail Notes API: http://127.0.0.1:{args.port}/articles.json", flush=True)
    ThreadingHTTPServer(("127.0.0.1", args.port), partial(Handler, directory=str(Path(__file__).parent))).serve_forever()
