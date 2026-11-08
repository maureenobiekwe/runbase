.PHONY: help dev
help:
	@echo "make dev    # run the local development server"

dev:
	vercel dev --listen 8080 --local-config vercel-local.json