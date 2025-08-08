
    import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { acaoteste } from "./lib/actions/acaoteste";

    export const conectorteste = createPiece({
      displayName: "Conectorteste",
      auth: PieceAuth.None(),
      minimumSupportedRelease: '0.36.1',
      logoUrl: "https://cdn.activepieces.com/pieces/conectorteste.png",
      authors: [],
      actions: [acaoteste],
      triggers: [],
    });
    